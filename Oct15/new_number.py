def open_or_senior(data):
    result = []
    for age, handicap in data:
        if age >= 55 and handicap > 7:
            result.append("Senior")
        else: 
            result.append("Open")
    return result


# Loop through each pair in the data. the age and the handicap
# If the age is at least 55 and the handicap is greater than 7, then the person is categorized as a "Senior"
# If not a senior, they are classified as Open
# afterwards return the list in a string