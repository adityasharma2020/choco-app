import React from 'react';
import {
	HomeIcon,
	MenuIcon,
	SearchIcon,
	ChatIcon,
	InfoIcon,
	ChartCohortIcon,
	ChartHistogramGrowthIcon,
	PersonIcon,
	SettingsIcon,
} from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';
import { NavLink } from 'react-router-dom';

export const NavigationBar = () => {
	return (
		<div className='navmenu-section'>
			<ul>
				<li title='Home'>
					<NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
						<Icon source={HomeIcon}  />
					</NavLink>
				</li>
				<li title='Menu'>
					<NavLink to='/menu' className={({ isActive }) => (isActive ? 'active' : '')}>
						<Icon source={MenuIcon} tone='base' />
					</NavLink>
				</li>
				<li title='Search'>
					<NavLink to='/search' className={({ isActive }) => (isActive ? 'active' : '')}>
						<Icon source={SearchIcon} tone='base' />
					</NavLink>
				</li>
				<li title='Chat'>
					<NavLink to='chat' className={({ isActive }) => (isActive ? 'active' : '')}>
						<Icon source={ChatIcon} tone='base' />
					</NavLink>
				</li>
				<li title='About us'>
					<NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>
						<Icon source={InfoIcon} tone='base' />
					</NavLink>
				</li>
				<li title='Graphs'>
					<NavLink to='/graph' className={({ isActive }) => (isActive ? 'active' : '')}>
						<Icon source={ChartCohortIcon} tone='base' />
					</NavLink>
				</li>
				<li title='Statistics'>
					<NavLink
						to='/statistics'
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						<Icon source={ChartHistogramGrowthIcon} tone='base' />
					</NavLink>
				</li>
				<li title='Users'>
					<NavLink to='/user' className={({ isActive }) => (isActive ? 'active' : '')}>
						<Icon source={PersonIcon} tone='base' />
					</NavLink>
				</li>
				<li title='Settings'>
					<NavLink
						to='/settings'
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						<Icon source={SettingsIcon} tone='base' />
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
