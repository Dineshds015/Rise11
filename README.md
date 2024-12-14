# Rise11 - jur

A simple claim form application built using React. This project allows users to file a claim by providing necessary details like claim value, contract value, place, language, and uploading required documents. It features a responsive layout with a sidebar, navbar, progress bar, and form fields for uploading files.

## Approach

- **Responsive Layout**: The dashboard layout is built using **Tailwind CSS** and **Flexbox** for a responsive design that adapts to mobile, tablet, and desktop screens.
- **Componentization**: The application is divided into reusable components: `Navbar`, `Sidebar`, `ProgressBar`, and `ClaimForm`.
- **Form Elements**: The claim form includes various fields such as text inputs, dropdowns for selecting currencies, radio buttons for yes/no questions, and file upload sections with validation (PDFs, max 2MB).
- **Progress Bar**: A dynamic progress bar guides users through different stages of the form.
- **File Upload**: The file upload fields are styled with Tailwind CSS and enhanced with **Font Awesome** icons for a modern, user-friendly interface.

## Challenges & Solutions

1. **Responsive Layout**: 
   - Initially, the layout wasn't responsive. Solved by using Tailwind's responsive classes (`md:grid-cols-3`, `md:flex-row`).
  
2. **Progress Bar Styling**: 
   - Made the progress bar dynamic by using conditional classes to differentiate between completed, in-progress, and remaining steps.

3. **File Upload Components**: 
   - Styled file upload sections to align with the overall design using custom Tailwind CSS classes and Font Awesome icons.

4. **State Management for Dropdowns**: 
   - Used React's `useState` to manage currency dropdown states (`contractCurrency` and `claimCurrency`), making the form interactive.

5. **User Feedback**: 
   - Added validation messages (e.g., "150% of Contract Value") and file size warnings to improve user experience.

## Assumptions

1. **Input Validation**: 
   - Assumed users would enter valid inputs for the fields, though further validation (e.g., regex) could be added.
  
2. **File Upload**: 
   - Assumed users will upload valid PDF files under 2MB, with error messages shown for invalid uploads.

3. **Device Compatibility**: 
   - Assumed the app would work on modern browsers (Chrome, Firefox, Safari). Testing across more browsers could be beneficial for broader compatibility.

4. **Internet Connection**: 
   - Assumed a stable internet connection for file uploads, with no offline support (future enhancements could include retry functionality).

5. **SPA Structure**: 
   - Built as a single-page application (SPA), assuming users are familiar with SPAs for smooth, dynamic navigation.


## Features

- **Responsive Design**: The application is fully responsive, adapting to different screen sizes using Tailwind CSS.
- **Progress Bar**: A progress bar that tracks the user's progress through the form.
- **Claim Form**: Users can input claim values, contract values, and upload relevant documents (e.g., contracts, agreements).
- **File Upload**: Supports file uploads with validation for maximum file size and type (PDF).
- **Multi-step Form**: Users can complete the form in multiple steps with visual feedback.

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/claim-form-app.git
```
### 2. Navigate to the project directory
```bash
cd claim-form-app
```
### 3. Install dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npm start
```

### Explanation of Sections:
- **Features**: Briefly describes the main features of the project.
- **Installation**: Instructions on how to install and run the project locally.
- **Technologies Used**: Lists the key technologies that were used to build the app.
- **Folder Structure**: Provides an overview of the project structure for easy navigation.
- **How to Contribute**: A basic guide on how others can contribute to the project.
- **License**: Specifies the licensing information, which can be modified based on your preferences.

You can customize the content of the README to reflect the specific details of your project, such as changing the repository URL and adding any other relevant sections if needed.
