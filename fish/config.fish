# Fish git prompt
set __fish_git_prompt_showdirtystate 'yes'
set __fish_git_prompt_showstashstate 'yes'
set __fish_git_prompt_showuntrackedfiles 'yes'
set __fish_git_prompt_showupstream 'yes'
set __fish_git_prompt_color_branch green
set __fish_git_prompt_color_upstream_ahead red
set __fish_git_prompt_color_upstream_behind red
set __fish_git_prompt_color_flags white
set __fish_git_prompt_color_upstream white

# Status Chars
set __fish_git_prompt_char_dirtystate '¬∀α ∈ β |'
set __fish_git_prompt_char_stagedstate '∀α ∈ β |'
set __fish_git_prompt_char_untrackedfiles '∃α ∉ β | β ⊆ 𝕌 '
set __fish_git_prompt_char_stashstate '∴ | '
set __fish_git_prompt_char_upstream_ahead ' β ≤ 𝕌 '
set __fish_git_prompt_char_upstream_behind ' β ≥ 𝕌 '
set __fish_git_prompt_char_cleanstate '¬∃α ∉ β |'
set __fish_git_prompt_char_upstream_equal ' β ⊆ 𝕌 '