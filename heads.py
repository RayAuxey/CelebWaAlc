from random import randint

HEAD = 1
TAIL = 0
NO_OF_TRIES = 10000


def generate_list():
    # head 1, tail 0
    return [randint(0, 1) for i in range(6)]


def check_streak(list_):
    return TAIL not in list_


number_of_streaks = 0

for i in range(NO_OF_TRIES):
    if check_streak(generate_list()):
        number_of_streaks += 1

print("Streak %: ", (number_of_streaks/NO_OF_TRIES * 100))
