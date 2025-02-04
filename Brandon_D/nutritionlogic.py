import dash
from dash import dcc, html
from dash.dependencies import Input, Output
import pandas as pd
import plotly.express as px

# Initialize the Dash app
app = dash.Dash(__name__)

file_path = 'C:\\Users\\Saint\\Downloads\\Brandon D Work\\fastfood.csv'
fastfood_data = pd.read_csv(file_path)
df = pd.read_csv('C:\\Users\\Saint\\Downloads\\Brandon D Work\\cleaned_data.csv')
# Sample DataFrame for the sake of this example (replace with your actual data)
data = {
    'item': ['Pizza', 'Burger', 'Fries', 'Salad'],
    'restaurant': ['Fast Food Palace', 'Burger King', 'Snack Attack', 'Healthy Eats'],
    'calories': [800, 600, 400, 150],
    'fat': [30, 25, 20, 5],
    'sodium': [1200, 1000, 900, 200],
    'carbs': [50, 55, 45, 20],
    'protein': [20, 25, 15, 10]
}
df = pd.DataFrame(data)

# Define the layout of the dashboard
app.layout = html.Div([
    html.H1("Fast Food Nutrition Dashboard", style={'text-align': 'center'}),

    # Infographic Section: Highest and Lowest Calories, Sodium, and Fat Items
    html.Div(
        style={
            'display': 'flex',
            'justify-content': 'space-around',
            'margin-bottom': '40px',
            'background-image': 'url(/assets/chicken.jpg)',
            'background-size': 'cover',
            'background-position': 'center',
            'background-attachment': 'fixed',
            'filter': 'brightness(100%)',
            'padding': '20px'
        },
        children=[
            # Highest Calorie Item Card
            html.Div(
                className='card',
                children=[
                    html.Div(className='card-header', children="Highest Calories Item"),
                    html.Div(className='card-body', children=[
                        html.H5(id='highest-calories-item', className='card-title'),
                        html.P(id='highest-calories-value', className='card-text'),
                    ])
                ], style={'width': '30%', 'background-color': '#f7d4d4'}
            ),
            # Highest Sodium Item Card
            html.Div(
                className='card',
                children=[
                    html.Div(className='card-header', children="Highest Sodium Item"),
                    html.Div(className='card-body', children=[
                        html.H5(id='highest-sodium-item', className='card-title'),
                        html.P(id='highest-sodium-value', className='card-text'),
                    ])
                ], style={'width': '30%', 'background-color': '#f7d4d4'}
            ),
            # Highest Average Calories
            html.Div(
                className='card',
                children=[
                    html.Div(className='card-header', children="Restaurant with Highest Average Calories"),
                    html.Div(className='card-body', children=[
                        html.H5(id='highest-average-calories-restaurant', className='card-title'),
                        html.P(id='highest-average-calories-value', className='card-text'),
                    ])
                ], style={'width': '30%', 'background-color': '#f9e79f'}
            ),
        ]
    ),

    # Infographic Section: Lowest Calories, Sodium, and Average Calories
    html.Div(
        style={
            'display': 'flex',
            'justify-content': 'space-around',
            'margin-bottom': '40px',
            'background-image': 'url(/assets/salad.jpg)',
            'background-size': 'cover',
            'background-position': 'center',
            'background-attachment': 'fixed',
            'filter': 'brightness(100%)',
            'padding': '20px'
        },
        children=[
            # Lowest Calorie Item Card
            html.Div(
                className='card',
                children=[
                    html.Div(className='card-header', children="Lowest Calories Item"),
                    html.Div(className='card-body', children=[
                        html.H5(id='lowest-calories-item', className='card-title'),
                        html.P(id='lowest-calories-value', className='card-text'),
                    ])
                ], style={'width': '30%', 'background-color': '#d4f7d4'}
            ),
            # Restaurant with Lowest Avg Calories Card
            html.Div(
                className='card',
                children=[
                    html.Div(className='card-header', children="Restaurant with Lowest Avg Calories"),
                    html.Div(className='card-body', children=[
                        html.H5(id='lowest-average-calories-restaurant', className='card-title'),
                        html.P(id='lowest-average-calories-value', className='card-text'),
                    ])
                ], style={'width': '30%', 'background-color': '#d4f7d4'}
            ),
            # **Average Calories Card
            html.Div(
                className='card',
                children=[
                    html.Div(className='card-header', children="Average Calories of All Items"),
                    html.Div(className='card-body', children=[
                        html.H5(id='average-calories-value', className='card-title')
                    ])
                ], style={'width': '30%', 'background-color': '#f9e79f'}
            ),
        ]
    ),

    # Dashboard dropdown
    dcc.Dropdown(
        id='food-dropdown',
        options=[{'label': f"{item} - {restaurant}", 'value': item} for item, restaurant in zip(df['item'], df['restaurant'])],
        value=df['item'].unique()[0],
        style={
            'width': '50%',
            'margin': 'auto',
            'backgroundColor': '#f7f7f7',
            'color': '#333',
            'font-size': '18px',
            'border': '2px solid #ccc',
            'border-radius': '5px'
        }
    ),

    # Graph
    dcc.Graph(id='nutrition-graph'),

    # Static wide image below the graph
    html.Div(
        children=[
            html.Img(
                src="/assets/brands.jpg",
                style={
                    'width': '50%',
                    'height': 'auto',
                    'border-radius': '10px',
                    'margin-top': '20px',
                    'float': 'right',
                }
            )
        ]
    ),

    # Table for data
    html.Div(id='nutrition-table', style={'padding': '20px'})
])


# Callback to update the dashboard
@app.callback(
    [Output('nutrition-graph', 'figure'),
     Output('nutrition-table', 'children'),
     Output('highest-calories-item', 'children'),
     Output('highest-calories-value', 'children'),
     Output('highest-sodium-item', 'children'),
     Output('highest-sodium-value', 'children'),
     Output('highest-average-calories-restaurant', 'children'),
     Output('highest-average-calories-value', 'children'),
     Output('lowest-calories-item', 'children'),
     Output('lowest-calories-value', 'children'),
     Output('lowest-average-calories-restaurant', 'children'),
     Output('lowest-average-calories-value', 'children'),
     Output('average-calories-value', 'children')],
    [Input('food-dropdown', 'value')]
)
def update_dashboard(selected_food):
    # Filter the dataset for the selected food item
    selected_data = df[df['item'] == selected_food].iloc[0]

    # Create a bar chart with nutrition data
    nutrition_data = selected_data.drop(['item', 'restaurant'], errors='ignore')
    fig = px.bar(
        x=nutrition_data.index,
        y=nutrition_data.values,
        labels={'x': 'Nutrient', 'y': 'Amount'},
        title=f"Nutritional Values of {selected_food}",
        template="plotly_dark"
    )

    # Create a table displaying the nutrition details
    table = html.Table(
        [html.Tr([html.Th('Nutrient'), html.Th('Value')])] +
        [html.Tr([html.Td(nutrient), html.Td(value)]) for nutrient, value in zip(nutrition_data.index, nutrition_data.values)]
    )

    # Get the highest calorie, sodium, and fat items
    highest_calories = df.loc[df['calories'].idxmax()]
    highest_sodium = df.loc[df['sodium'].idxmax()]

    # Get the restaurant with highest and lowest average calories
    avg_calories_per_restaurant = df.groupby('restaurant')['calories'].mean()
    highest_avg_calories_restaurant = avg_calories_per_restaurant.idxmax()
    highest_avg_calories_value = avg_calories_per_restaurant.max()
    lowest_avg_calories_restaurant = avg_calories_per_restaurant.idxmin()
    lowest_avg_calories_value = avg_calories_per_restaurant.min()

    # Get the lowest calorie item
    lowest_calories = df.loc[df['calories'].idxmin()]

    # Calculate the average calories
    avg_calories = df['calories'].mean()
    avg_calories_text = f"{avg_calories:.2f} kcal"

    # Return the updated graph, table, and infographic data
    return (
        fig, table,
        highest_calories['item'], f"{highest_calories['calories']} kcal",
        highest_sodium['item'], f"{highest_sodium['sodium']} mg",
        highest_avg_calories_restaurant, f"{highest_avg_calories_value:.2f} kcal",
        lowest_calories['item'], f"{lowest_calories['calories']} kcal",
        lowest_avg_calories_restaurant, f"{lowest_avg_calories_value:.2f} kcal",
        avg_calories_text
    )


# Run the Flask server with Dash
if __name__ == '__main__':
    app.run_server(debug=True)