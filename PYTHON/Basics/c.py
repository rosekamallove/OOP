# Object Oriented Programming in Python

class Dog:
    # this will be called whenever we write Dog() lik on line 13 and will pass any argument that you put in Dog()
    def __init__(self, name, age):
        self.name = name  # self.name is an attribute of class dog which is name
        self.age = age
        # print(name)

    def get_name(self):
        return self.name

    def get_age(self):
        return self.age

    def set_age(self, age):
        self.age = age


d = Dog("Rose", 12)  # creating a new instance of the class Dog d is an object
print(d.get_name(), " ", end='')
print(d.get_age())

d.set_age(23)

print(d.get_name(), " ", end='')
print(d.get_age())
