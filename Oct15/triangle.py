def is_triangle(a, b, c):
    
    return a > 0 and b > 0 and c> 0 and (a + b > c) and (a + c > b) and (b + c > a)


# The function will check to see if all the sides are greater than zero 
# Then it checks the triangle inequality conditions
# if all conditions are satisfied, it will be True, otherwise, False. 