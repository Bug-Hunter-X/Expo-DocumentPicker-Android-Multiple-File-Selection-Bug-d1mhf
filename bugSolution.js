While a complete fix requires changes within the Expo DocumentPicker library, a temporary workaround might involve using the react-native-document-picker library or building a custom solution leveraging native Android modules. This would involve creating a separate Android native module for file selection and integrating it with your React Native application. This will require a deeper understanding of native Android development and bridging to React Native.  This example demonstrates a placeholder for a more comprehensive native Android solution and is not intended to be a drop-in replacement.

```javascript
// Placeholder for a more robust solution using react-native-document-picker or native Android modules
import DocumentPicker from 'react-native-document-picker'; // Or a native module

const pickMultipleFiles = async () => {
  try {
    const results = await DocumentPicker.pickMultiple({ allowMultiSelection: true });
    console.log('Selected Files:', results);
  } catch (err) {
    console.log('Error:', err);
  }
};
```