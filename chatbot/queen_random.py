import random


def random_string():
    random_list = [
        "Veritus, I don't have all day.",
        "Don't anger me.",
        "Repeat yourself clearly."
    ]

    list_count = len(random_list)
    random_item = random.randrange(list_count)

    return random_list[random_item]
