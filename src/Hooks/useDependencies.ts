export default function useDependencies() {
  const dependencies = [
    'food',
    'water',
    'friends',
    'family',
    'trees',
    'nethack',
    'cats',
  ]
  const devDependencies = [
    'challenges',
    'automony',
    'teamwork',
    'collaboration',
    'support',
    'mentorship',
    'retros',
    'version control',
  ]
  return {
    dependencies,
    devDependencies,
  }
}
