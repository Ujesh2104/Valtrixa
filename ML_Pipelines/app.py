from flask import Flask, request, jsonify
from flask_cors import CORS

from prediction_service import (
    ValtrixaPredictionService
)


app = Flask(__name__)

CORS(app)


try:

    prediction_service = (
        ValtrixaPredictionService()
    )

    MODEL_STATUS = True

except Exception as error:

    prediction_service = None

    MODEL_STATUS = False

    print(
        f"Model loading failed: {error}"
    )


@app.get("/")
def home():

    return jsonify({
        "success": True,
        "service": "VALTRIXA AI Service",
        "status": "running",
        "modelsLoaded": MODEL_STATUS
    })


@app.get("/health")
def health():

    return jsonify({
        "success": True,
        "service": "VALTRIXA AI",
        "status": "healthy"
        if MODEL_STATUS
        else "model loading failed"
    })


@app.post("/predict")
def predict():

    if not MODEL_STATUS:

        return jsonify({
            "success": False,
            "message": "AI models are not loaded"
        }), 500

    try:

        data = request.get_json(
            silent=True
        )

        if not data:

            return jsonify({
                "success": False,
                "message": "No input data provided"
            }), 400

        prediction = (
            prediction_service.predict(
                data
            )
        )

        return jsonify({
            "success": True,
            "message": "Prediction generated successfully",
            "prediction": prediction
        }), 200

    except Exception as error:

        return jsonify({
            "success": False,
            "message": str(error)
        }), 500


@app.errorhandler(404)
def not_found(error):

    return jsonify({
        "success": False,
        "message": "Route not found"
    }), 404


@app.errorhandler(500)
def server_error(error):

    return jsonify({
        "success": False,
        "message": "Internal server error"
    }), 500


if __name__ == "__main__":

    print(
        "Starting VALTRIXA AI Service..."
    )

    app.run(
        host="127.0.0.1",
        port=5001,
        debug=True
    )