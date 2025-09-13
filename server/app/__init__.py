from .config import Config
from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    from .extensions import init_extensions
    init_extensions(app)

    '''BluePrint Registration'''
    from app.routes.auth.main import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    from app.routes.app.main import main_bp
    app.register_blueprint(main_bp, url_prefix='/api/app')

    return app