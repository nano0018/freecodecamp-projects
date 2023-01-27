def arithmetic_arranger(inputValues, val=False):
    msg = ""
    primaryValues = []
    secondaryValues = []
    operatorValue = []
    if len(inputValues) > 5:
        msg = "Error: Too many problems."
        return msg
    else:
        for problemValues in inputValues:
            counterFor = 1
            tempValue = ""
            primaryValue = True
            for problemValue in problemValues:
                if (problemValue.isnumeric() == True and primaryValue == True):                    
                    tempValue += problemValue
                    counterFor += 1
                elif problemValue.isnumeric() == False:
                    if problemValue == " ":
                        if tempValue != "":
                            if len(tempValue) <= 4:
                                primaryValues.append(tempValue)
                                primaryValue = False
                                counterFor += 1
                                tempValue = ""
                            else:
                                return "Error: Numbers cannot be more than four digits."
                    elif problemValue != " ":
                        if problemValue == "+" or problemValue == "-":
                            operatorValue.append(problemValue)
                        elif problemValue.isalpha() == True:
                            return "Error: Numbers must only contain digits."
                        else:                            
                            return "Error: Operator must be '+' or '-'."
                if (problemValue.isnumeric() == True and primaryValue == False):                    
                    tempValue += problemValue
                    counterFor += 1
                    if counterFor == (len(problemValues)-1):
                        if len(tempValue) <= 4:
                            secondaryValues.append(tempValue)
                        else:
                            return "Error: Numbers cannot be more than four digits."
        return primaryValues + operatorValue + secondaryValues
      
#Checked
#actual = arithmetic_arranger(["3 / 855", "3801 - 2", "45 + 43", "123 + 49"])
#actual = arithmetic_arranger(["44 + 815", "909 - 2", "45 + 43", "123 + 49", "888 + 40", "653 + 87"])
#actual = arithmetic_arranger(["3 / 855", "3801 - 2", "45 + 43", "123 + 49"])
#actual = arithmetic_arranger(["98 + 3g5", "3801 - 2", "45 + 43", "123 + 49"])
#actual = arithmetic_arranger(["24 + 8521", "3801 - 2", "45 + 43", "123 + 40009"])
actual = arithmetic_arranger(["3 + 855", "3801 - 2", "45 + 43", "123 + 49"])
print(actual)
