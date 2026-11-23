<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/alert-dialog
-->
<script lang="ts">
	import './styles.css'
	import {
		AlertDialog,
		AlertDialogClose,
		AlertDialogDescription,
		AlertDialogFooter,
		AlertDialogHeader,
		AlertDialogPopup,
		AlertDialogTitle,
		AlertDialogTrigger,
	} from './ui/alert-dialog/index.ts'
	import { buttonVariants } from './ui/button/index.ts'
</script>

<AlertDialog>
	<AlertDialogTrigger class={buttonVariants({ variant: 'outline' })}>Delete project</AlertDialogTrigger>
	<AlertDialogPopup>
		<AlertDialogHeader>
			<AlertDialogTitle>Delete this project?</AlertDialogTitle>
			<AlertDialogDescription>Its files and settings will be removed for good.</AlertDialogDescription>
		</AlertDialogHeader>
		<AlertDialogFooter>
			<AlertDialogClose class={buttonVariants({ variant: 'ghost' })}>Cancel</AlertDialogClose>
			<AlertDialogClose class={buttonVariants({ variant: 'destructive' })}>Delete</AlertDialogClose>
		</AlertDialogFooter>
	</AlertDialogPopup>
</AlertDialog>
