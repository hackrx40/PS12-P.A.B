import json

def dataTransform(data):
    def parse_value(value):
        try:
            # Try parsing as a JSON object
            return json.loads(value)
        except json.JSONDecodeError:
            # If not JSON, check if it's an integer
            try:
                return int(value)
            except ValueError:
                # If not an integer, check if it's a float
                try:
                    return float(value)
                except ValueError:
                    # If none of the above, return the original value as string
                    return value

    result = {}
    for key, value in data.items():
        if isinstance(value, list):
            # If the value is a list, parse each element in the list
            result[key] = [parse_value(item) for item in value]
        else:
            # For non-list values, parse the value directly
            result[key] = parse_value(value)

    return result