# This entrypoint file to be used in development. Start by reading README.md
import shape_calculator
from unittest import main


sq = shape_calculator.Square(5)

sq.set_side(2)
actual = sq.get_picture()
expected = "**\n**\n"
print(expected)
print(actual)

# Run unit tests automatically
main(module='test_module', exit=False)