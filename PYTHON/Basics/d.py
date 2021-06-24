# Object Oriented Programming

class Student:
    def __init__(self, name, age, grade):
        self.age = age
        self.name = name
        self.grade = grade  # 0-100

    def get_grade(self):
        return self.grade


class Course:
    def __init__(self, name, max_students):
        self.name = name
        self.max_students = max_students
        self.students = []

    def add_students(self, student):
        if len(self.students) < self.max_students:
            self.students.append(student)
            return True
        return False

    def get_average_grade(self):
        value = 0
        for student in self.students:
            value += student.get_grade()
        return value/len(self.students)


s1 = Student("Rose", 17, 85)
s2 = Student("Fariya", 18, 95)
s3 = Student("Raj", 17, 84)

course = Course("Math", 2)
course.add_students(s1)
course.add_students(s3)
print(course.add_students(s2))
print(course.get_average_grade())
