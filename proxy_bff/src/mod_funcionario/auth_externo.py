# proxy_bff/src/mod_funcionario/auth_externo.py
from flask import Blueprint, request, jsonify
import requests

auth_ext_bp = Blueprint("auth_ext", __name__)

@auth_ext_bp.route("/auth/login_externo", methods=["POST"])
def login_externo():
    dados = request.json

    try:
        resposta = requests.post("http://comandas_api:5000/auth/login", json=dados)
        return jsonify(resposta.json()), resposta.status_code
    except requests.exceptions.RequestException as e:
        print("Erro ao se conectar à API:", e)
        return jsonify({"erro": "Erro ao se conectar à API"}), 500
