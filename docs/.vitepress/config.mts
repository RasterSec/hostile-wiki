import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hostile",
  description: "A framework for auditing hosting provider infrastructure security.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/usage' }
    ],

    sidebar: [
      {
        text: 'Quickstart',
        items: [
          { text: 'Usage', link: '/usage' },
          { text: 'About', link: '/about' }
        ]
      },

      {
        text: 'Containers',
        items: [
          { text: 'LXC', link: '/lxc' },
          { text: 'OpenVZ', link: '/openvz' }
        ]
      },
      {
        text: 'Hypervisors',
        items: [
          { text: 'KVM', link: '/kvm' },
          { text: 'Xen', link: '/xen' },
          { text: 'Hyper-V', link: '/hyperv' },
          { text: 'VMware', link: '/vmware' },
        ]
      },
      {
        text: 'Platforms',
        items: [
          { text: 'Proxmox', link: '/proxmox' },
          { text: 'XCP-ng', link: '/xcpng' },
          { text: 'SolusVM', link: '/solusvm' },
          { text: 'OpenStack', link: '/openstack' }
        ]
      },
      {
        text: 'Network',
        items: [
          { text: 'IP Spoofing', link: '/ipspoof' },
          { text: 'Link-local access', link: '/linklocal' },
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RasterSec/hostile' }
    ],

    footer: {
      message: 'Released under the Apache License.',
      copyright: 'Copyright © 2025 Digilol'
    }
  }
})
