import {FlatList, View} from 'react-native';
import React, {useState} from 'react';
import Text from 'viamagnus/src/components/Text';
import Button from 'viamagnus/src/components/Button';
import commonStyles from 'viamagnus/src/styles/common';
import styles from 'viamagnus/src/styles/components/UserTabs';
import CardImage from 'viamagnus/src/assets/svg/CardImage';
import Badge from 'viamagnus/src/components/Badge';

type Tab = {
  title: string;
  key: string;
};

const tabs = [
  {title: 'Games Played', key: 'games'},
  {title: 'Badges', key: 'badges'},
] as Tab[];

const badges = [
  {
    title: 'First Stripe Earned',
    desc: 'Top 10% of highest spending players in a month',
  },
  {
    title: 'Born Winner',
    desc: 'Top 10% of highest spending players in a month',
  },
  {
    title: 'Trader of the Month',
    desc: 'Top 10% of highest spending players in a month',
  },
  {
    title: 'Jackpot',
    desc: 'Top 10% of highest spending players in a month',
  },
  {
    title: 'Impossible',
    desc: 'Top 10% of highest spending players in a month',
  },
];

export default function UserTabs() {
  const [currentTab, setCurrentTab] = useState(tabs[1].key);

  function handleTabChange(tab: Tab) {
    setCurrentTab(tab.key);
  }

  return (
    <View>
      <View style={[commonStyles.row]}>
        {tabs.map(tab => {
          return (
            <Button
              onPress={() => handleTabChange(tab)}
              key={tab.key}
              style={[styles.tabContainer]}>
              <Text.H3
                styles={[
                  styles.tab,
                  tab.key === currentTab ? styles.selectedTab : {},
                ]}>
                {tab.title}
              </Text.H3>
            </Button>
          );
        })}
      </View>

      <FlatList
        data={badges}
        keyExtractor={item => item.title}
        renderItem={({item}) => <Badge badge={item} />}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
