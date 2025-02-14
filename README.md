# HNG STAGE TWO TASK 


Frontend Wizards, Here’s Your Stage 2 Task! 
Welcome to Stage 2! :tada: In this stage, you’ll take your skills up a notch by building a Conference Ticket Generator.

### Study Material
- React Official Documentation: https://react.dev/
- React Forms and Validation: https://reactjs.org/docs/forms.html
- React State Management: https://react.dev/learn/managing-state
- React Event Handling: https://react.dev/learn/responding-to-events
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro/
- Accessible Forms in React: https://www.digitala11y.com/react-forms-and-accessibility/
- CSS Layouts for Responsive Design: https://css-tricks.com/snippets/css/media-queries-for-standard-devices/

 ### Figma File for UI Reference:
 Event Ticket Booking UI - Open Source Practice Project
 Pixel perfect implementation is required 
 
### Task - Conference Ticket Generator
- You will build and host a Conference Ticket Generator using React or any React Framework (e.g., Next.js, etc.). The ticket generator will allow users to fill out a form with their details, perform validations on the inputs, and generate a ticket upon successful submission.
- Note: Only React or any React Framework is allowed.

### Core Features
1. Form Elements:
- Full Name: Text input for the user's full name.
- Email Address: Email input field.
- Avatar Upload: Users should upload their avatar image and store it using Cloudinary or any image hosting service. The form should only accept and submit the image URL.
- Submit Button: Button to submit the form.

2. Form Validation:
- Ensure all required fields are filled in before submission.
- The email should have a valid format.
- The avatar upload should accept Cloudinary URLs or any image link.
- Provide clear error messages near the respective field if validation fails.

3. State Persistence
- The form should retain user inputs using IndexedDB or local storage so that the data is not lost on page refresh.

4. Accessibility
- Ensure all form fields, hints, and error messages are screen-reader accessible.
- All elements must be focusable, with clear hover and focus states.
- Users must be able to navigate the form and submit it using only the keyboard.

### Ticket Generation
1. On successful submission, generate and display a Conference Ticket containing:
- Full Name
- Email Address
- Avatar (displayed as an image from the provided URL)
- The ticket should only be generated if the form passes validation.

### Responsive Design
- Ensure the form and ticket layout adjust seamlessly across different screen sizes .
- Optimize for small screens with proper spacing and stacking.
- Acceptance Criteria
- Form Validation:
- Users must provide all required details before submission.
- The email should be in a valid format.
- Avatar uploads should be handled via Cloudinary or any external image URL submission.
- Display relevant error messages near the respective fields.

### State Persistence
- The form fields should persist user input using IndexedDB or local storage, ensuring data remains intact even if the page is refreshed.

### Ticket Generation:
- The generated ticket should display the user’s full name, email, and avatar.
- The ticket should only appear when all form validations pass successfully.

### Accessibility:
- All form elements and error messages must be fully accessible and announced by screen readers.
- The application must support complete keyboard navigation.
- 
### Responsive Design:
- The form and generated ticket must be fully responsive and visually optimized for all device sizes.
- Ensure the ticket is clearly visible immediately after submission on both mobile and desktop screens.
- Code Quality:
- Write modular, well-structured, and readable code.
- Utilize appropriate React hooks (e.g., useState, useEffect) for state management and validation.
- Implement proper form element types and validation techniques.

### Submission Mode
- Host your application on a platform of your choice (e.g., Vercel, Netlify).
- Submit your task using the following submission form: https://forms.gle/ofBkt7nLuDQoALvz7

In your submission, include:
- The URL to your hosted Conference Ticket Generator.
- The GitHub repository link containing your code.

### Submission Deadline
- The deadline for submission is 14th Feb 2025, 11:59 PM GMT +1.
- Late submissions will not be accepted.
All the best! :star2:
Let’s see what you’ve got! :muscle::fire:

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.





