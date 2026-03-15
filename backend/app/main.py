from flask import Flask
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os


load_dotenv()

def create_app():
    app = Flask(__name__)

    
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')

    
    jwt = JWTManager(app)

    from app.api.v1.endpoints.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/api/v1/auth')

    @app.route('/')
    def index():
        return {"message": "API Backend Python está online!"}

    return app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)