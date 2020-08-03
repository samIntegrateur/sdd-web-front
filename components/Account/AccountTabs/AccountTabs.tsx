import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { TabReference, TabType } from '../../UI/Tab/Tab.type';
import Tab from '../../UI/Tab/Tab';
import { useRouter } from 'next/router';

// Lazy loading
const DynamicProfile = dynamic(() => import('../Profile/Profile'));
const DynamicConversations = dynamic(() => import('../Conversations/Conversations'));
const DynamicOffers = dynamic(() => import('../Offers/Offers'));

// todo: tab switching and routing logic should be in Tab UI component
const AccountTabs: React.FC = () => {

  const router = useRouter();

  // ------------------ Local vars ------------------
  const tabsInitial: TabType[] = [
    {
      title: 'Mon Profil',
      query: 'Profil',
      component: DynamicProfile,
    },
    {
      title: 'Mes annonces',
      query: 'Annonces',
      component: DynamicConversations,
    },
    {
      title: 'Mes conversations',
      query: 'Conversations',
      component: DynamicOffers,
    }
  ];

  // ------------------ State ------------------
  const [tabs] = useState<TabType[]>(tabsInitial);
  const [tabActive, setTabActive] = useState<number>(0);

  const [
    ActiveComponent,
    setActiveComponent
  ] = useState<React.ComponentType>(tabsInitial[0].component);

  // ------------------ Effects ------------------

  const routerQueryTab = router.query.tab || null;

  useEffect(() => {

    const getTabReference = (tab: string): TabReference | null => {
      if (tab) {
        const activeTab = tabs.find(t => t.query === tab);
        const activeTabKey = tabs.findIndex(t => t.query === tab);
        if (activeTab) {
          return {
            component: activeTab.component,
            key: activeTabKey
          }
        }
        return null;
      }
      return null;
    };

    if (routerQueryTab) {
      let tab = routerQueryTab;
      if (Array.isArray(tab)) {
        tab = tab[0];
      }
      const activeTab = getTabReference(tab);
      if (activeTab) {
        setTabActive(activeTab.key);
        setActiveComponent(activeTab.component);
      }
    }

  }, [routerQueryTab, tabs]);

  const clickHandler = (index: number): void => {
    // change url without reloading
    const query = tabs[index].query;
    const href = `/compte?tab=${query}`;
    const as = href;
    router.push(href, as, {shallow: true});
  };

  return (
    <Tab
      tabs={tabs}
      tabActive={tabActive}
      clicked={clickHandler}
      ActiveComponent={ActiveComponent}
    />
  );
}

export default AccountTabs;
