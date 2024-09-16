def duplicate_encode(word):
    #your code here

    word = word.lower()  # Make it case insensitive
    char_count = {}  # Dictionary to count occurrences of each character
    
    # Count the occurrences of each character
    for char in word:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    
    # Build the encoded string
    encoded_string = ""
    for char in word:
        if char_count[char] == 1:
            encoded_string += "("
        else:
            encoded_string += ")"
    
    return encoded_string

# Convert the word to lowercase to ignore capitalization.
# Create a dictionary (char_count) to store the count of each character.
# Loop through the word to populate the dictionary with character counts.
# Loop through the word again and append "(" if the character count is 1, otherwise append ")".
# Return the resulting string.
