from flask.json import jsonify
from flask import app, request
from models import *
import hashlib,jwt
db.create_all()
db.session.commit()

key='super-secret'




if __name__ == '__main__':
    app.run(debug=True)
