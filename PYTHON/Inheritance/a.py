
# class Cat:
#     def __init__(self, name, age):
#         self.name = age
#         self.age = age

#     def speak(self):
#         print("Meow")


# class Dog:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def speak(self):
#         print("Bark")


# The only thing that is diff in the above two classes is the speak method so we can do the follwing studd ideally

class Pet:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def show(self):
        print(
            f"I am {self.name} and I am {self.age} years old and I Speak ", end='')

    def speak(self):
        print("I don't know what I speak!")


class Cat(Pet):  # This means I am inheriting this (Pet) uper level class
    def __init__(self, name, age, color):
        # this says initialize name and age from the super(parent) class
        super().__init__(name, age)
        self.color = color

    def show(self):
        print(
            f"I am {self.name} and I am {self.age} years old and I am {self.color}")

    def speak(self):
        print("Meow")


class Dog(Pet):
    def speak(self):
        print("Bark")


class Fish(Pet):
    pass


p = Pet("Tim", 19)
p.speak()
c = Cat("Bill", 34, "Ginger")
c.show()
# c.speak()
d = Dog("jell", 25)
d.show()
d.speak()

f = Fish("Bubbles", 10)
f.speak()
