const { isArray } = Array;

module.exports = ({ site, i18n }) => {
  const idxConfig = site.get('identityX');

  const enabled = site.get('idxNavItems.enable');
  if (!enabled) return;
  const defaultTargets = [
    'navigation.user.items',
  ];
  const targets = site.getAsArray('idxNavItems.navigationTargets').length ? site.getAsArray('idxNavItems.navigationTargets') : defaultTargets;
  const navConfig = [
    {
      href: idxConfig.getEndpointFor('login'),
      label: `${i18n('Sign In')}`,
      when: 'logged-out',
      modifiers: ['user'],
    },
    {
      href: idxConfig.getEndpointFor('profile'),
      label: 'Manage Account',
      when: 'logged-in',
      modifiers: ['user'],
    },
    {
      href: idxConfig.getEndpointFor('logout'),
      label: 'Sign Out',
      when: 'logged-in',
      modifiers: ['user'],
    },
    // {
    //   href: idxConfig.getEndpointFor('register'),
    //   label: 'Sign Up',
    //   when: 'logged-out',
    //   modifiers: ['user'],
    // },
  ];
  targets.forEach((target) => {
    const nav = site.get(target);
    if (isArray(nav)) nav.unshift(...navConfig);
  });
};
