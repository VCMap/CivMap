import React from 'react'
import { connect } from 'react-redux'

import { default as MuiAppBar } from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ShareIcon from 'material-ui-icons/Share'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import MenuIcon from 'material-ui-icons/Menu'
import SearchIcon from 'material-ui-icons/Search'
import CloseIcon from 'material-ui-icons/Close'

import { openBrowseMode, openLayerDetail, openSearch, openShare, setDrawerOpen } from '../../store'

const AppBarFeature = ({
  feature,
  openBrowseMode,
  openLayerDetail, // TODO go back to feature's layer
  openSearch,
  openShare,
  setDrawerOpen,
}) => {
  return <div className='appbar custom-appbar'>
    <IconButton onClick={setDrawerOpen}>
      <MenuIcon />
    </IconButton>

    <div className='appbar-stretch'>{
      feature ? (feature.properties.name || 'Some ' + feature.geometry.type)
      : 'Create new Feature'
    }</div>

    <IconButton disabled onClick={openSearch}>
      <SearchIcon />
    </IconButton>

    <IconButton disabled onClick={openShare}>
      <ShareIcon />
    </IconButton>

    <IconButton onClick={openBrowseMode}>
      <CloseIcon />
    </IconButton>
  </div>
}

const mapStateToProps = ({ features, control }) => {
  return {
    feature: features[control.editFeatureId],
  }
}

const mapDispatchToProps = {
  openBrowseMode,
  openLayerDetail,
  openSearch,
  openShare,
  setDrawerOpen,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBarFeature)
