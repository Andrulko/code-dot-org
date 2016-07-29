import React from 'react';
import { connect } from 'react-redux';
import TeacherPanel from '../TeacherPanel';
import ToggleGroup from '@cdo/apps/templates/ToggleGroup';
import FontAwesome from '@cdo/apps/templates/FontAwesome';
import { ViewType, setViewType, selectSection } from '../../teacherPanelRedux';

const styles = {
  viewAs: {
    fontSize: 16,
    margin: 10
  },
  toggleGroup: {
    margin: 10
  },
  select: {
    margin: 10,
    width: 180
  },
  text: {
    margin: 10
  },
  exclamation: {
    color: 'red'
  },
  dontForget: {
    display: 'inline',
    marginLeft: 10,
    fontSize: 16,
    fontFamily: '"Gotham 7r", sans-serif'
  }
};

const ScriptTeacherPanel = React.createClass({
  propTypes: {
    viewAs: React.PropTypes.oneOf(Object.values(ViewType)).isRequired,
    sections: React.PropTypes.object.isRequired, // TODO
    selectedSection: React.PropTypes.string,
    setViewType: React.PropTypes.func.isRequired,
    selectSection: React.PropTypes.func.isRequired,
  },

  handleSelectChange(event) {
    this.props.selectSection(event.target.value);
  },

  render() {
    const { viewAs, sections, selectedSection, setViewType } = this.props;
    if (Object.keys(sections).length === 0) {
      return null;
    }
    // TODO - i18n
    // TODO - don't forget section is conditional on having unlocked stages
    return (
      <TeacherPanel>
        <h3>Teacher Panel</h3>
        <div className="content">
          <div className="non-scrollable-wrapper">
            <div style={styles.viewAs}>
              View page as:
            </div>
            <div style={styles.toggleGroup}>
              <ToggleGroup
                selected={viewAs}
                onChange={setViewType}
              >
                <button value={ViewType.Student}>Student</button>
                <button value={ViewType.Teacher}>Teacher</button>
              </ToggleGroup>
            </div>
          </div>
          <select
            name="sections"
            style={styles.select}
            value={selectedSection}
            onChange={this.handleSelectChange}
          >
            <option value="none">Select a Section</option>
            {Object.keys(sections).map(id => (
              <option key={id} value={id}>
                {sections[id].name}
              </option>
            ))}
          </select>
          {this.props.viewAs === ViewType.Teacher &&
            <div>
              <div style={styles.text}>
                Select a section to be able to lock and unlock assessments or
                surveys. Click the lock settings button in the stage to the left.
              </div>
              <div style={styles.text}>
                <FontAwesome icon="exclamation-triangle" style={styles.exclamation}/>
                <div style={styles.dontForget}>Don't forget</div>
              </div>
              <div style={styles.text}>
                Lock the following stages that are currently unlocked:
              </div>
            </div>
          }
        </div>
      </TeacherPanel>
    );
  }
});

export default connect(state => ({
  viewAs: state.teacherPanel.viewAs,
  sections: state.teacherPanel.sections,
  selectedSection: state.teacherPanel.selectedSection
}), dispatch => ({
  setViewType(viewAs) {
    dispatch(setViewType(viewAs));
  },
  selectSection(sectionId) {
    dispatch(selectSection(sectionId));
  }
}))(ScriptTeacherPanel);
