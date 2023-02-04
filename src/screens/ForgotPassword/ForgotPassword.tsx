import React from 'react'
import { SafeAreaView, View, Text, Pressable } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'react-native-navigation'
import Style from './ForgotPassword.style'

// Language variable
const base = 'forgot_password_screen'

// Interface
interface Props {
  componentId: string
}

const ForgotPassword = observer(({ componentId = '' }: Partial<Props>) => {
  const { t } = useTranslation()

  // Methods
  const _onNavigateBack = () => {
    Navigation.pop(componentId)
  }

  console.log(componentId)

  return (
    <SafeAreaView style={Style.safeArea}>
      <Pressable style={Style.pressableContainer} onPress={_onNavigateBack}>
        <View style={Style.container}>
          <View style={Style.titleContainer}>
            <Text style={Style.title}>{t(`${base}.title`)}</Text>
          </View>
          <View style={Style.body}>
            <Text>{t(`${base}.description`)}</Text>
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  )
})

export default ForgotPassword
