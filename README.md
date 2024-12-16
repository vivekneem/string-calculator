# String Calculator

A simple string calculator that takes a string input of numbers and returns their sum.

## Features

- Basic number addition
- Custom delimiters support
- Newline handling
- Negative number validation
- Clean and responsive UI

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd string-calculator
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm start
```

## Deployment

You can deploy this project to various platforms:

### GitHub Pages

1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages in repository settings

### Netlify

1. Connect your GitHub repository
2. Set build settings:
   - Build command: (none required)
   - Publish directory: src

### Vercel

1. Import your GitHub repository
2. Set the output directory to 'src'
3. Deploy

## Usage Examples

1. Basic input: "1,5" → Result: 6
2. Multiple numbers: "1,2,3" → Result: 6
3. Custom delimiter: "//;\n1;2" → Result: 3
4. With newlines: "1\n2,3" → Result: 6
