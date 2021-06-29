import React, { useEffect, useState } from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiPanel, EuiStat, EuiTextColor } from '@elastic/eui';
import $ from 'jquery'
import '@elastic/eui/dist/eui_theme_light.css';


const App = () => {
  const styleHeading = { fontWeight: "bold", fontSize: "12px", textAlign: "center" };
  const [pipelineValue, setPipelineValue] = useState([])

  useEffect(() => {
    $.ajax({
      url:'https://dev.4pointx.com:12361/pdm_overview_get_metrics?plant=All%22&time=Last%201%20year',
      success: function (result) {
        setPipelineValue(result)
      }
    })
  }, [])

  // useEffect(() => {
  //   fetch('https://dev.4pointx.com:12361/pdm_overview_get_metrics?plant=All%22&time=Last%201%20year')
  //     .then(res => res.json())
  //       setPipelineValue(pipelineData)
  // }, [])

console.log(pipelineValue)
  return (
    <div style={{ padding: "50px" }}>
      <EuiFlexGroup gutterSize="m">
        <EuiFlexItem grow={false}>
          <EuiPanel paddingSize="l">
            <EuiSpacer size="xl" />
            <EuiFlexGroup alignItems='center' style={{paddingRight:"40px"}}>
              <EuiFlexItem>
                <EuiStat style={styleHeading}>Pipeline</EuiStat>
                <EuiStat title={pipelineValue[0]} textAlign="center"/>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiStat style={styleHeading}>Online</EuiStat>
                <EuiStat title={pipelineValue[1]} textAlign="center" />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiStat style={styleHeading}>Events</EuiStat>
                <EuiStat title={pipelineValue[2] + "k"} textAlign="center" />
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size="xl" />
          </EuiPanel>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiPanel grow={true}>
            <div style={{ fontSize: 16, fontWeight: "bold" }}>Events Over Time</div>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup >

    </div >

  )
};

export default App;