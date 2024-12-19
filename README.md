# Expo DocumentPicker Android Multiple File Selection Bug

This repository demonstrates a bug in Expo's DocumentPicker API on Android. When selecting multiple files, only the path of the last selected file is returned.  This issue is specific to Android; iOS functions correctly.

## Bug Report

The `DocumentPicker.getDocumentAsync` function, when used with `allowMultiSelection: true` on Android, only returns the URI of the last file selected, discarding the URIs of files selected previously. This behavior is unexpected and inconsistent with the documentation and the iOS implementation.

## Steps to Reproduce

1. Run the provided example on an Android device or emulator.
2. Use the DocumentPicker to select multiple files.
3. Observe that only the URI of the last selected file is returned in the result.

## Expected Behavior

The function should return an array of URIs, each corresponding to a file selected by the user.

## Actual Behavior

Only the URI of the last selected file is returned.

## Solution

A temporary workaround (until Expo fixes the issue) might involve using a different file picker library, or selectively using native modules on Android.  The `bugSolution.js` file in this repository provides a placeholder for an alternative solution.