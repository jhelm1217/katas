def xo(s):
    
    # Convert the string to lowercase for case-insensitive comparison
    s = s.lower()
    
    # Count occurrences of 'x' and 'o'
    return s.count('x') == s.count('o')


# Convert the string to lowercase using s.lower() so the comparison is case-insensitive.
# Use the count() method to get the number of 'x's and 'o's in the string.
# Return True if the counts are equal, otherwise return False.
