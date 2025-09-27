#Typing test for the Video
#Lucian and Enzo, real hacker type xi

#Ultimate goal: Display text, assign some sort of boolean evaluator so that it can check if the user input matches the given text. Then if it is correct, it will continue the video. 
import time
import random
#Within a function
def typingTest():
#Create a list of phrases that are typed
    quotes = [
        "Who-a eata my spaghett." , 
        "JOHN PORK is in the house today!", 
        "Capuccina ballerina, tung tung tung sahur.", 
        "Skibidi bum bum bum yes yes.", 
        "My favourite Roblox game is grow a garden.",
        "Bonjour mon ami, tu es magnifique."
    ]

#Allow for the random selection of the text in a list (Can use for loop or random choice)
    print("Type out the prescribed sentence.\n")
    startTime = time.time()
    while True: 
        quote = random.choice(quotes) #for now
    #Display the given text and start time
        print(quote)
        wpm_start_time = time.time()
#Gather input from the user
        test = input()
        word_count = len(test.split())
#Create a boolean operator for the text
        if test == quote:
#Conditionals for success or failure (idk what to do for this ngl)
            endTime = time.time()
            wpmTime = (endTime - wpm_start_time) / 60
            spentTime = endTime - startTime
            wpm = word_count / wpmTime
            print("Excellent, the video may progress.")
            print(f"You spent {spentTime:.2f} seconds.")
            print(f"Your WPM was: {wpm:.2f}")
            break

        elif test != quote:
            print("\nTry again\n")
        

    #TODO Metrics: Luxury (, countdown, time out), 
    # Important (Stopwatch timer, WPM, List of type able words (can this be imported?), 

#Run function
typingTest()
