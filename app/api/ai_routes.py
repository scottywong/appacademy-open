# Let's setup the OpenAI API key
import openai
from flask import Blueprint, jsonify, request
from flask_login import login_required,current_user
import os
from asyncio import await

openai.organization = "org-VLvO6xJAo4Cti2bfNwfE5bgP"
openai.api_key = os.environ.get('OPENAI_KEY')
openai.Model.list()

ai_routes = Blueprint('ai', __name__)

async def callApi():

    response = await openai.Completion.create(
    model="text-davinci-003",
    prompt="Say this is a test",
    max_tokens=7,
    temperature=0
    )
    return response.data.choices[0].text


@ai_routes.route('/test')
async def test():

    r = await callApi()

    return r



