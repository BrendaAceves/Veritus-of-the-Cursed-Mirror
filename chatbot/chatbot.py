# https://www.youtube.com/watch?v=azP_d7SiRDg

import json
import re
import chatbot.queen_random as queen_random


def load_json(file):
    with open(file) as bot_responses:
        # print(f"Loaded '{file}' successfully!")
        return json.load(bot_responses)


# get the character json
response_data = load_json("queen.json")


def get_response(input_string):
    split_message = re.split(r'\s+|[,;?!.-]\s*', input_string.lower())  # tokenization
    score_list = []

    # Check all the responses
    for response in response_data:
        response_score = 0
        required_score = 0
        required_words = response["required_words"]

        # Check if there are any required words
        if required_words:
            for word in split_message:
                if word in required_words:
                    required_score += 1

        # Amount of required words should match the required score
        if required_score == len(required_words):
            # Check each word the user has typed
            for word in split_message:
                if word in response["user_input"]:
                    response_score += 1
        score_list.append(response_score)

    # Find the best response and return it if they're not all 0
    best_response = max(score_list)
    response_index = score_list.index(best_response)

    # empty response
    if input_string == "":
        return "Veritus?"

    # if bad user input (no good bot response)
    if best_response != 0:
        return response_data[response_index]["bot_response"]

    return queen_random.random_string()


while True:
    user_input = input("You: ")
    print("the Queen:", get_response(user_input))
    if ():
        pass
