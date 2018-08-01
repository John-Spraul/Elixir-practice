defmodule App.GuardianSerializer do
  @behaviour Guardian.Serializer

  alias App.Repo
  alias App.User

  def for_token(user = %User{}), do: {:ok, "User:#{user.id}"}
  def for_token(_), do: {:error, "Uknown resource type"}
end
