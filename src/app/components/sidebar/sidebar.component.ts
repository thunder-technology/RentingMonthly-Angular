import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: '主页',  icon: 'dashboard', class: '' },
    { path: '/table-list', title: '房东列表',  icon: 'content_paste', class: '' },
    { path: '/house-info', title: '房源列表', icon: 'account_balance', class: 'house-info'},
    { path: '/house-recording', title: '房源信息录入',  icon: 'account_balance', class: 'house-recording' },
    { path: '/owner-recording', title: '房客信息录入',  icon: 'face', class: 'owner-recording' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
