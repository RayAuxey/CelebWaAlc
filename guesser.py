from random import randint


def correct_guesses(answer, guess):
    positioned = ' '.join(['✔️' if answer[i] == guess[i]
                           else '❌' for i in range(len(answer))])
    count = positioned.count('✔️')
    return count, positioned


number_to_guess = str(randint(0, 9999))

if int(number_to_guess) < 1000:
    number_to_guess = number_to_guess.zfill(4)

# print(number_to_guess)

show_position = False
if 'y' in input("Do you want a position helper? yes/no: ").lower():
    show_position = True

tries = 0

while True:
    tries += 1
    guess = input("Guess a number: ")

    if guess == number_to_guess:
        break

    count, positioned = correct_guesses(number_to_guess, guess)
    print("Incorrect guess, you guessed", count, " digits correct")

    if show_position:
        print("Position Helper: ", positioned)

print("You guessed right: {}\nNumber of tries: {}".format(number_to_guess, tries))

# print(correct_guesses("12344", "46478"))


# def correct_guesses_simple(answer, guess):
#     common = []
#     for value in answer:
#         if value in guess:
#             common.append(value)
#     return len(common)
