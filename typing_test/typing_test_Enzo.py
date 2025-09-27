# importing random
#import random

#Within a function
#def typing_test()
#Create a list of phrases that are typed
#list = ["The quick brown fox jumps over the lazy dog.",
#"Hackathons are fun!",
#"Typing tests mash well with video.",
#
# "Keep going or the video stops!"]

#Allow for the random selection of the text in a list


#Display the given text
#test = random.choice(list)

#Gather input from the user
#target_words = input()

#Create a boolean operator for the text
#is_correct = (user_input.strip() == target_text)

#Conditionals for success or failure (idk what to do for this ngl)

import time
import random

def typing_test():
    # List of sentences
    sentences = [
        "The quick brown fox jumps over the lazy dog.",
        "Typing tests mash well with video.",
        "Hackathons are fun and challenging.",
        "Practice makes perfect when coding.",
        "Python is simple but powerful."
    ]
    
    # Pick a random sentence
    target = random.choice(sentences)
    print("\n--- Typing Test ---")
    print("Type the following sentence:\n")
    print(target)
    print("\nPress Enter when ready...")
    input()  # wait until user is ready
    
    # Start timer
    start_time = time.time()
    
    # User types
    typed = input("\n>>> ")
    
    # End timer
    end_time = time.time()
    elapsed_time = end_time - start_time
    
    # Calculate stats
    target_words = target.split()
    typed_words = typed.split()
    
    correct_chars = sum(1 for i, c in enume
    rate(typed) if i < len(target) and c == target[i])
    accuracy = (correct_chars / len(target)) * 100 if len(target) > 0 else 0
    
    wpm = (len(typed_words) / (elapsed_time / 60)) if elapsed_time > 0 else 0  # words per minute
    
    # Results
    print("\n--- Results ---")
    print(f"Time: {elapsed_time:.2f} seconds")
    print(f"WPM: {wpm:.2f}")
    print(f"Accuracy: {accuracy:.2f}%")

# Run the test
typing_test()
