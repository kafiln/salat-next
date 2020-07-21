import { Document, Page, StyleSheet, View } from '@react-pdf/renderer';
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
const MyDocument = ({
  isRTL,
  arClasses,
  hijriMonth,
  georgianMonths,
  NAMES,
  lastItem
}) => (
  <Document>
    <Page size="A4" style={newstyles.page}>
      <View
        className={`border-2 my-4 w-full lg:w-3/4 mx-auto  text-xs sm:text-md md:text-lg  lg:text-xl `}
      >
        <View className="bg-gray-400 text-gray-800">
          <View className={` ${isRTL ? arClasses : ''} flex`}>
            <View
              className={`flex-1 ${
                isRTL ? '' : 'border-r'
              }  text-center capitalize`}
            >
              <FormattedMessage id={KEYS.DAY} />
            </View>
            <View className="flex-1 border-r  text-center">{hijriMonth}</View>
            <View className="flex-1 border-r  text-center capitalize">
              {georgianMonths}
            </View>
            {NAMES.map((name, i) => {
              return (
                <View
                  key={name}
                  className={`flex-1  text-center ${
                    i !== lastItem ? 'border-r border-l' : ''
                  } `}
                >
                  <FormattedMessage id={`PRAYER_${name.toUpperCase()}`} />
                </View>
              );
            })}
          </View>
        </View>

        <View>
          {Object.entries(prayers || []).map(([_, prayer], i) => {
            return (
              <View
                className={`${isRTL ? arClasses : ''} border-t flex  
                ${new Date(prayer.day).getDay() === 5 ? 'bg-green-200' : ''}  
                ${prayer.isToday ? 'font-bold text-white bg-green-600' : ''}
                `}
                key={i}
              >
                <View
                  className={`flex-1  text-center capitalize ${
                    isRTL ? '' : 'border-r'
                  }`}
                >
                  <Text></Text>
                  <FormattedDate value={new Date(prayer.day)} weekday="short" />
                </View>
                <View className="flex-1 border-r  text-center">
                  {prayer.hijri.day}
                </View>
                <View className={`flex-1 border-r  text-center `}>
                  <FormattedDate value={new Date(prayer.day)} day="numeric" />
                </View>
                {NAMES.map((name, j) => (
                  <View
                    className={`flex-1  text-center ${
                      j !== lastItem ? 'border-r border-l' : ''
                    } `}
                    key={j}
                  >
                    {formatTime(prayer[name])}
                  </View>
                ))}
              </View>
            );
          })}
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
