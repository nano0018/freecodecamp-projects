class Rectangle:

    def __init__(self, width, height):
        self.width = width
        self.height = height

    def set_width(self, width):
        self.width = width
    
    def set_height(self, height):
        self.height = height
    
    def get_area(self):
        return self.height * self.width
    
    def get_perimeter(self):
        return 2*(self.height + self.width)
    
    def get_diagonal(self):
        return ((self.width ** 2 + self.height ** 2) ** .5)
    
    def get_picture(self):
        polygon_picture =  ""
        if self.height > 50 or self.width > 50:
            return "Too big for picture."
        for i in range(self.height):
            polygon_picture += "*"*self.width
            if i < (self.height):
                polygon_picture += "\n"                
        return polygon_picture
    
    def get_amount_inside(self, polygon):
        check_width = self.width // polygon.width
        check_height = self.height // polygon.height
        return check_width * check_height

    def __repr__(self):
        return f"Rectangle(width={self.width}, height={self.height})"

class Square(Rectangle):

    def __init__(self, side):
        super().__init__(side, side)

    def set_side(self, side):
        self.set_height(side)
        self.set_width(side)        
    
    def __repr__(self):
        return f"Square(side={self.width})"
