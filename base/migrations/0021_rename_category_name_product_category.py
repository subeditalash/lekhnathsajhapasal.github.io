# Generated by Django 4.0 on 2022-05-22 19:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0020_rename_category_product_category_name_category'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='category_name',
            new_name='category',
        ),
    ]