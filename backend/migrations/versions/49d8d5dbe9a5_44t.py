"""44t

Revision ID: 49d8d5dbe9a5
Revises: 9ccc94eed562
Create Date: 2024-03-20 18:24:10.148349

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '49d8d5dbe9a5'
down_revision: Union[str, None] = '9ccc94eed562'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product', sa.Column('image', sa.BLOB(), nullable=True))
    op.add_column('product', sa.Column('quantity', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('product', 'quantity')
    op.drop_column('product', 'image')
    # ### end Alembic commands ###
