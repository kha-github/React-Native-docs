import React, {Component} from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	Linking,
	TouchableOpacity,
} from 'react-native';
import Markdown from 'react-native-markdown-package';
import markdownStyle from '../../../../style/markdownStyle'

const text1 = `
# Introduction
> React Native 여정의 시작을 환영합니다! 환경 설정 가이드는 [자체 섹션](https://reactnative.dev/docs/environment-setup)으로 분리되었습니다. 문서, 네이티브 컴포넌트, React 등에 대한 소개를 계속 읽어보세요!

고급 iOS 개발자부터 React 초보자, 경력자부터 처음 프로그래밍을 시작하는 사람들까지, 다양한 사람들이 React Native를 사용합니다. 이 문서는 경험 수준이나 배경에 관계없이 모든 학습자를 위해 작성되었습니다. 

## How to use these docs
여기에서 시작해서 책처럼 순서대로 문서를 읽어나가거나, 아니면 필요한 섹션만 골라서 읽을 수도 있습니다. 이미 React에 익숙한가요? [이 섹션](https://reactnative.dev/docs/intro-react)을 건너뛰거나, 간단한 복습을 위해 읽고 넘어가도 좋습니다. 

## Prerequisites
React Native로 작업을 하려면 JavaScript에 대한 기본적인 이해가 필요합니다. JavaScript를 처음 사용하거나 복습이 필요한 경우, Mozilla Debeloper Network에서 [본격적으로 학습](https://developer.mozilla.org/en-US/docs/Web/JavaScript)하거나 [가볍게 복습](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)할 수 있습니다. 

> 이 문서는 React, Android, 또는 iOS 개발에 대한 사전지식이 없는 사람을 대상으로 작성되었지만, 열정적인 React Native 개발자에게 귀중한 학습 자료이기도 하므로, 필요한 경우 좀 더 깊이있는 자료나 글들을 링크로 올려두었습니다. 

## Interactive examples
Introduction에서는 다음과 같은 동적인 예제를 바로 실행해볼 수 있습니다. `

const code1 = `
\`\`\`jsx
import React from 'react';
import { Text, View } from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Try editing me! 🎉
      </Text>
    </View>
  );
}

export default YourApp;
\`\`\`
`
const text2 = `
위의 "Try editing me!" 텍스트를 "Hello, world!"로 변경해보세요. 

> 로컬 개발 환경 설정을 원하는 경우, [로컬 기기에서 개발 환경 설정하기](링크) 가이드를 따라 이 예제 코드를 \`App.js\` 파일에 복사하면 됩니다. (웹 개발자인 경우, 모바일 브라우저 테스트를 위한 로컬 환경이 이미 설정되어 있을 수 있습니다!)

## Function Components and Class Components (함수형 컴포넌트와 클래스형 컴포넌트)
React에서는 클래스 또는 함수를 사용해 컴포넌트를 만들 수 있습니다. 원래 클래스형 컴포넌트가 상태를 가질 수 있는 유일한 컴포넌트였지만, React의 Hooks API 도입 이후 함수형 컴포넌트에도 상태 등을 추가할 수 있게 되었습니다. 

[Hooks은 React Native 0.59에 도입](https://reactnative.dev/blog/2019/03/12/releasing-react-native-059)되었으며, React 컴포넌트를 작성하는 미래 지향적인 방식이기 때문에, 함수형 컴포넌트 예제를 사용해 introduction을 작성했습니다.  
필요한 경우, 다음과 같은 토글에서 클래스형 컴포넌트 또한 다루고 있습니다. 

(toggle)
함수형 컴포넌트`

const code2 = `
\`\`\`jsx
import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>Hello, world!</Text>
    </View>
  );
}

export default HelloWorldApp;
\`\`\`
`

const text3 = `
클래스형 컴포넌트`

const code3 = `
\`\`\`jsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}

export default HelloWorldApp;
\`\`\`
`
const text4 = `
[이 문서의 이전 버전](링크)에서 더 많은 클래스형 컴포넌트 예제를 찾을 수 있습니다.

## Developer Notes
다양한 개발 배경을 가진 사람들이 React Native를 배우고 있습니다. 당신은 웹에서 Android, iOS 등에 이르는 폭넓은 기술 경험을 가지고 있을 수도 있습니다. 우리는 모든 배경의 개발자들을 위한 문서를 작성하려고 노력했습니다. 때로는 다음과 같은 플랫폼별 설명이 제공됩니다.

(toggle)
Android : Android 개발자는 이 개념에 친숙할 수도 있습니다.
iOS : iOS 개발자는 이 개념에 친숙할 수도 있습니다.
Web : Web 개발자는 이 개념에 친숙할 수도 있습니다.

## Formatting
메뉴는 굵은 글씨로 작성되었으며 꺽쇠를 사용해 하위 메뉴를 탐색합니다. 예: **Android Studio > Preferences**

---
가이드가 어떻게 구성되었는지 알아봤으니, 이제 React Native: [네이티브 컴포넌트](https://reactnative.dev/docs/intro-react-native-components)의 기초에 대해 알아보겠습니다.
`

const TheBasics = () => {
	return (
		<ScrollView
			contentInsetAdjustmentBehavior="automatic"
			style={styles.scrollView}>
			<View style={styles.container}>
				<Markdown
					styles={markdownStyle.collectiveMd}
					onLink={(url) => Linking.openURL(url)}
				>
					{ text1 }
				</Markdown>
				<TouchableOpacity>
					<Markdown
						styles={markdownStyle.codeBlock}
					>
						{ code1 }
					</Markdown>
				</TouchableOpacity>
				<Markdown
					styles={markdownStyle.collectiveMd}
					onLink={(url) => Linking.openURL(url)}
				>
					{ text2 }
				</Markdown>
				<TouchableOpacity>
					<Markdown
						styles={markdownStyle.codeBlock}
					>
						{ code2 }
					</Markdown>
				</TouchableOpacity>
				<Markdown
					styles={markdownStyle.collectiveMd}
					onLink={(url) => Linking.openURL(url)}
				>
					{ text3 }
				</Markdown>
				<TouchableOpacity>
					<Markdown
						styles={markdownStyle.codeBlock}
					>
						{ code3 }
					</Markdown>
				</TouchableOpacity>
				<Markdown
					styles={markdownStyle.collectiveMd}
					onLink={(url) => Linking.openURL(url)}
				>
					{ text4 }
				</Markdown>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		padding:20
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	}
});

export default TheBasics;