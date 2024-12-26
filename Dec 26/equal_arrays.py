def find_even_index(arr):
    for i in range(len(arr)):
        left_sum = sum(arr[:i])
        right_sum = sum(arr[i+1:])
        if left_sum == right_sum:
            return i
    return -1

# Iterate through each index in the array
# Calculate the sum of the left side and the right side
# Check if the sums are equal
# If no such index is found, return -1
