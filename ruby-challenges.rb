# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# 1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'                  # Expected output: ['coffee', 'soda water']
letter_t = 't'                  # Expected output: ['tea', 'water', 'soda water']

def find_it word_array, letter
    words_containing = []
    word_array.map do | word |
        if word.count(letter) > 0
            words_containing << word
        end
    end
    words_containing
end

p find_it beverages_array, letter_o
p find_it beverages_array, letter_t

# 2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]       # Expected output: 76
nums_array2 = [25, 17, 47, 11]  # Expected output: 100

def sum_it nums_array
    sum = 0

    nums_array.each { |num|
        sum += num
    }
    sum
end

p sum_it nums_array1
p sum_it nums_array2

# 3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    def initialize model
        @model = model
        @wheels = 4
        @current_speed = 0
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed}."
    end
end

trek_bike = Bike.new 'Trek'
p trek_bike.bike_info

# 3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
    attr_reader :wheels, :current_speed
    def initialize model
        @model = model
        @wheels = 4
        @current_speed = 0
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed}."
    end
    
    def pedal_faster speed_increase
        @current_speed += speed_increase
    end

    def brake speed_decrease
        if @current_speed > speed_decrease
            @current_speed -= speed_decrease
        else
            @current_speed = 0
        end
    end
end

new_trek_bike = Bike.new 'Trek'
new_trek_bike.pedal_faster 10
new_trek_bike.pedal_faster 20
p new_trek_bike.current_speed

new_trek_bike.brake 15
p new_trek_bike.current_speed
new_trek_bike.brake 20
p new_trek_bike.current_speed