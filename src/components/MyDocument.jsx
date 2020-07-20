import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

// Create styles
const newstyles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = (
  <Document>
    <Page size="A4" style={newstyles.page}>
      <View style={newstyles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={newstyles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
