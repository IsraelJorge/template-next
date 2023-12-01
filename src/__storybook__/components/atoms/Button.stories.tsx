import { Button, ButtonProps } from '@/components/ui/Button'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'atoms/Button',
  component: Button
} as Meta<typeof Button>

type Story = StoryObj<ButtonProps>

const ButtonTemplate: Story = {
  render: () => <Button>Clique</Button>
}

export const Default: Story = {
  ...ButtonTemplate
}
