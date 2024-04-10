# ELU-UI Library
My own UI Library with components I would like to use in other projects.

## Components
### Password Input
#### Use The Component
A password input component with a show/hide password button.
Make sure you have TailwindCSS installed in your project if you want to use custom styles.
```jsx
// Import the PasswordInput component
import { PasswordInput } from 'elu-ui';

// Use the PasswordInput component
<PasswordInput />
```
#### Props
```jsx	
<PasswordInput value={} onChange={} placeholder="" />
```
If you want to add custom styles you can use the props 'custom' or just for the font 'customFont'. In there you can only use tailwind